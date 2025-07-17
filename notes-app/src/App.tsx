import React from 'react';
import Layout from './components/layout/Layout';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/Card';

const App: React.FC = () => {
  return (
    <Layout
      headerTitle="Notes App"
      headerActions={
        <Button variant="primary" size="sm">
          Nova Nota
        </Button>
      }
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>🎉 Etapa 2 Concluída: Styling com Tailwind CSS</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Sistema de design moderno implementado com sucesso!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">✅ Implementado:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tailwind CSS configurado</li>
                  <li>• Layout responsivo</li>
                  <li>• Componentes UI reutilizáveis</li>
                  <li>• Sistema de cores moderno</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🧩 Componentes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Button (3 variantes + 3 tamanhos)</li>
                  <li>• Input (com validação)</li>
                  <li>• Card (modular)</li>
                  <li>• Layout (Header + Sidebar + Main)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Buttons Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Componente Button</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">Variantes:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-2">Tamanhos:</h5>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Input Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Componente Input</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input label="Nome" placeholder="Digite seu nome..." />
                <Input
                  label="Email"
                  placeholder="Digite seu email..."
                  error="Este campo é obrigatório"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card variant="outlined">
          <CardHeader>
            <CardTitle>🚀 Próximos Passos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Com o sistema de design implementado, estamos prontos para a{' '}
              <strong>Etapa 3: Estado e Funcionalidades</strong>.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Continuar para Etapa 3</Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default App;
