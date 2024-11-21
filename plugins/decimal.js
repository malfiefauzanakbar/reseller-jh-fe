export default defineNuxtPlugin(() => {
    return {
      provide: {
        formatNumber: (number) => {
          if (typeof number !== 'number') {
            return number;
          }
          return number.toLocaleString('id-ID');
        },
      },
    };
  });
  