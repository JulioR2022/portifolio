import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await pb.collection('contacts').create({
        name: data.name,
        email: data.email,
        message: data.message
      }, { $autoCancel: false });
      
      toast.success('Mensagem enviada com sucesso');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome completo"
          className="text-foreground"
          {...register('name', { required: 'Nome é obrigatório' })}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          className="text-foreground"
          {...register('email', { 
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Sua mensagem..."
          rows={6}
          className="text-foreground resize-none"
          {...register('message', { 
            required: 'Mensagem é obrigatória',
            minLength: {
              value: 10,
              message: 'Mensagem deve ter pelo menos 10 caracteres'
            }
          })}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full transition-all duration-200 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
}

export default ContactForm;