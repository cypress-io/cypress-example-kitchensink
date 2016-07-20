describe('Second State', function(){
  it('force another failed spec', function(){
    cy
      .visit('app/index.html')

      .get("foobar")
  })
})
