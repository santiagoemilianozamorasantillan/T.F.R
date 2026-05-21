import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'completed':
        return {
          label: 'Completado',
          className: 'bg-green-50 text-green-700 border-green-200'
        };
      case 'pending':
        return {
          label: 'Pendiente',
          className: 'bg-amber-50 text-amber-700 border-amber-200'
        };
      case 'rejected':
        return {
          label: 'Rechazado',
          className: 'bg-red-50 text-red-700 border-red-200'
        };
      default:
        return {
          label: 'Desconocido',
          className: 'bg-gray-50 text-gray-700 border-gray-200'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;