describe('State', function(){
  it('force failed assetion', function(){
    cy
      .visit('app/index.html')

      .get("foobar")
  })
})
