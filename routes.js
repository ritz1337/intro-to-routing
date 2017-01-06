module.exports = [
  {
    method: 'GET',
    path: '/',
    action: function() {
      return 'Hello and Welcome'
    }
  },
  {
    method: 'GET',
    path: '/random',
    isStatic: false,
    action: function(){
      var randomNumber = Math.floor( Math.random() * 10 );
      return 'You get ' + randomNumber;
    }
  }
];
