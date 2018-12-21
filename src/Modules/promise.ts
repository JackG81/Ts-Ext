declare global {
    interface PromiseConstructor {
        chain(promises: Promise<void>[]):Promise<void>;
    }
}
Promise.chain = async (promises: Promise<void>[]):Promise<void> => {
   for (const promise in promises) {
      await promise;
   }
}

export {}