package io.unbounded.booking.api;

import io.unbounded.booking.domain.Booking;
import io.unbounded.booking.service.BookingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Dave Townsend
 */
@RestController
@RequestMapping(value = "/api")
@Slf4j
public class BookingResource {

  private BookingService bookingService;

  public BookingResource(BookingService bookingService) {
    this.bookingService = bookingService;
  }


  @GetMapping(value = "/booking/{bookingNumber}")
  public List<Booking> getBooking(@PathVariable String bookingNumber) {
    log.info("- api request for getBooking({})", bookingNumber);
    return bookingService.getBooking(bookingNumber);
  }


  @GetMapping(value = "/booking")
  public List<Booking> getBookings() {
    log.info("- api request for getBookings()");
    return bookingService.getBookings();
  }
}
