import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface EmailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmailModal = ({ open, onOpenChange }: EmailModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Спасибо!",
        description: "Мы сообщим вам о запуске продукта",
      });
      setEmail("");
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Mail" size={32} className="text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            Скоро запуск!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Оставьте свой email и мы сообщим вам о запуске
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base h-12"
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 text-base bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                Уведомить меня
                <Icon name="ArrowRight" className="ml-2" />
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
