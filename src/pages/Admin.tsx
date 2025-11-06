import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface EmailEntry {
  id: number;
  email: string;
  created_at: string;
}

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emails, setEmails] = useState<EmailEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://functions.poehali.dev/7e2321f1-5a10-49b6-ae81-46840eb8d598?password=${encodeURIComponent(password)}`
      );
      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setEmails(data.emails);
        toast({
          title: "Успешно",
          description: `Загружено ${data.total} email`,
        });
      } else {
        toast({
          title: "Ошибка",
          description: "Неверный пароль",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Проблема с подключением",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyAllEmails = () => {
    const emailList = emails.map(e => e.email).join(", ");
    navigator.clipboard.writeText(emailList);
    toast({
      title: "Скопировано",
      description: `${emails.length} email скопированы в буфер обмена`,
    });
  };

  const exportCSV = () => {
    const csv = [
      "ID,Email,Дата регистрации",
      ...emails.map(e => `${e.id},${e.email},${new Date(e.created_at).toLocaleString('ru-RU')}`)
    ].join("\n");
    
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `waitlist_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    
    toast({
      title: "Экспортировано",
      description: "CSV файл загружен",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Lock" size={32} className="text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Админ-панель</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-base h-12"
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Загрузка...
                  </>
                ) : (
                  <>
                    Войти
                    <Icon name="ArrowRight" className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Waitlist подписчиков</h1>
            <p className="text-muted-foreground">Всего зарегистрировано: {emails.length}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setIsAuthenticated(false);
              setPassword("");
            }}
          >
            <Icon name="LogOut" className="mr-2" />
            Выйти
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-all cursor-pointer" onClick={copyAllEmails}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Copy" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Копировать все email</h3>
                  <p className="text-sm text-muted-foreground">Для рассылки</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer" onClick={exportCSV}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon name="Download" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Экспорт в CSV</h3>
                  <p className="text-sm text-muted-foreground">С датами регистрации</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Список email</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {emails.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      #{entry.id}
                    </Badge>
                    <span className="font-medium">{entry.email}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(entry.created_at).toLocaleString('ru-RU', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              ))}
              {emails.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Пока нет подписчиков</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
