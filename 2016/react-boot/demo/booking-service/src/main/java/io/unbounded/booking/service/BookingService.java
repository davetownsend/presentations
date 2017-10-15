package io.unbounded.booking.service;

import io.unbounded.booking.domain.Booking;
import java.util.List;

/**
 * @author Dave Townsend
 */
public interface BookingService {

  List<Booking> getBooking(String bookingNumber);

  List<Booking> getBookings();
}
