import React from 'react';
import { TotalPedido } from './pedido.vm';

interface Context extends TotalPedido {
  updatingTotal(total: number);
  updatingProgress(progress: number);
}

export const PedidoGeneradoContext = React.createContext<Context>({
  total: 0,
  progress: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updatingTotal: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updatingProgress: () => {},
});

export const PedidoGeneradoProvider: React.FC = ({ children }) => {
  const [total, setTotal] = React.useState(0);
  const updatingTotal = total => {
    setTotal(total);
  };
  const [progress, setProgress] = React.useState(0);
  const updatingProgress = progress => {
    setProgress(progress);
  };

  return (
    <PedidoGeneradoContext.Provider
      value={{
        total,
        progress,
        updatingTotal,
        updatingProgress,
      }}
    >
      {children}
    </PedidoGeneradoContext.Provider>
  );
};