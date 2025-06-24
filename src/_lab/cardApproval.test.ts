describe('Card Approval', () => {
  it('should return only approved request records', () => {
    // expect(
    //   pipe(
    //     // file -> Either
    //     // load card request from file -> Either
    //     // filter approved -> Either
    //   )
    // ).toEqual(right - approved request)
  })

  it('should return only rejected request records', () => {
    // expect(
    //   pipe(
    //     // file -> Either
    //     // load card request from file -> Either
    //     // filter rejected -> Either
    //   )
    // ).toEqual(right - rejected request)
  })

  it('should return left error when file is corrupted', () => {
    // expect(
    //   pipe(
    //     // file -> Either
    //     // load card request from file and detect file corrupted -> Either
    //     // filter approved (let error pass through) -> Either
    //   )
    // ).toEqual(left - file corrupted error)
  })
})