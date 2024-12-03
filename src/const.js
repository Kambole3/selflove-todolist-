const Status={
    BACKLOG:`backlog`,
    PROCESSING: `process`,
    DONE: `ready`,
    BASKET: `basket`,
    TRASH:`trash`
  };
  


const StatusLabel = {
    [Status.BACKLOG]: `Бэклог`,
    [Status.PROCESSING]: `В процессе`,
    [Status.DONE]: `Готово`,
    [Status.BASKET]: `Корзина`,
    [Status.TRASH]:`Oтчистить`
  };


  export {Status,StatusLabel};