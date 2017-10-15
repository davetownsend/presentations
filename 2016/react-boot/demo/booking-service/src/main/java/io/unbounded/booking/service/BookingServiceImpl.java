package io.unbounded.booking.service;

import io.unbounded.booking.domain.Booking;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

/**
 * @author Dave Townsend
 */
@Service
@Slf4j
public class BookingServiceImpl implements BookingService {

  @Override
  public List<Booking> getBooking(String bookingNumber) {
    log.info("- returning Booking {} ", bookingNumber);
    return Collections.singletonList(
            Booking.builder().id(randoId()).bookingNumber(bookingNumber).port("AK").status("ACTIVE").build());
  }

  @Override
  public List<Booking> getBookings() {
    log.info("- returning collection of Bookings");
    return Arrays.asList(
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("AK").status("ACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("HON").status("ACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("OAK").status("ACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("AK").status("ACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("HON").status("ACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("OAK").status("INACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("SHA").status("ACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("GUM").status("ACTIVE").build(),
            Booking.builder().id(randoId()).bookingNumber(randoBk()).port("AK").status("ACTIVE").build()
    );
  }

  private Long randoId() {
    long x = 1234L;
    long y = 2345L;
    Random r = new Random();
    return x+((long)(r.nextDouble()*(y-x)));

  }

  private String randoBk() {
    long x = 1234567L;
    long y = 2345678L;
    Random r = new Random();
    long number = x+((long)(r.nextDouble()*(y-x)));
    return String.valueOf(number);
  }
}
