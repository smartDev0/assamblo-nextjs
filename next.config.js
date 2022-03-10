module.exports = () => {
  return {
    async rewrites() {
      return [
        {
          source: '/blockchain',
          destination: '/traceability',
        },
        {
          source: '/es/blockchain',
          destination: '/es/trazabilidad',
        },
      ];
    },
  };
};
