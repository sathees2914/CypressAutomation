

describe('TicketNew', () => {
  it('should navigate to TicketNew.com', () => {
    cy.visit('https://www.ticketnew.com/')
    cy.get(':nth-child(7) > a > .MobileMovieCitySelector_topCityName__ZlICA').click()
    cy.get(':nth-child(4) > div > .bgImg').click();
    cy.get(':nth-child(6) > .H5RunningMovieV2_runningMovie__3_RWh > a > .H5RunningMovieV2_imgWrapper__inAMo > .bgImg').click();
    cy.get('[href="/movies/star-movie-detail-170470?frmtid=63wajiucj&fromdate=2024-05-23"] > .DatesMobileV2_movieDateText__AA4n3').click();
    cy.get(':nth-child(3) > .MovieSessionsListing_col2__2vcaY > :nth-child(1) > .greenCol').click();
    cy.get(':nth-child(5) > .FixedSeating_seatL___joUf > :nth-child(14) > .available').eq(0).click(); 
    cy.get(':nth-child(5) > .FixedSeating_seatL___joUf > :nth-child(15) > .available').click();
    cy.get('.Button_btn___t8GZ').click();
   
   
   
   


  })
})


