package io.unbounded.booking.domain;

import lombok.Builder;
import lombok.Data;

/**
 * @author Dave Townsend
 */
@Data
@Builder
public class Booking {

  private Long id;
  private String bookingNumber, status, port;
}
