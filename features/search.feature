Feature: Search a movie
    Scenario: ShouldSuccessfulTicketBookingToHallHall_90
        Given the user open the title page of movie web-site
        When the user choose day_4
        When the user choose movieHoll_90 and session time
        When the user selects an empty seat_7_8 in the cinema hall
        When the user click accept buttom
        Then the seat is booked

    Scenario: ShouldSuccessfulTicketBookingToHallHall_1
        Given the user open the title page of movie web-site
        When the user choose day_6
        When the user choose movieHoll_1 and session time
        When the user selects an empty seat_1_10 in the cinema hall
        When the user click accept buttom
        Then the seat is booked

    Scenario: UnsuccessfulTicketBookingToHallHall_2
        Given the user open the title page of movie web-site
        When the user choose movieHoll_2 and session time
        Then the seat is unbooked
