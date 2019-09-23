


  var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(() => {
        console.log(this.id);
      }, 1000);
    }
  };

  console.log(obj.counter())


//console.log (obj.address); 