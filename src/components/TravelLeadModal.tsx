import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface TravelLeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TravelLeadModal = ({ open, onOpenChange }: TravelLeadModalProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Ошибка",
        description: "Введите корректный email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://functions.poehali.dev/8753de90-8fde-466e-b533-f55023275e13",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setEmail("");
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Что-то пошло не так",
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

  const handleClose = () => {
    setIsSuccess(false);
    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" />
                Хочу путешествовать легко
              </DialogTitle>
              <DialogDescription className="text-base">
                Оставьте email и узнайте первым о запуске ИИ-гида
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base"
                  disabled={isLoading}
                  autoFocus
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    Отправить
                    <Icon name="ArrowRight" className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={32} className="text-primary" />
            </div>
            <DialogTitle className="text-2xl mb-2">Спасибо!</DialogTitle>
            <DialogDescription className="text-base mb-6">
              Спасибо, что оставили контакт, обязательно свяжемся с вами после запуска!
            </DialogDescription>
            <Button onClick={handleClose} className="w-full bg-primary hover:bg-primary/90">
              Отлично
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};