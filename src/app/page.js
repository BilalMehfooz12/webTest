import BookTicket from "./Screen/BookTicket/bookTicket";
import Place from "./Screen/Place/place";
import TicketSection from "./Screen/TicketSection/ticketSection";

export default function Home() {
  return (
    <div>
      <TicketSection />
      <BookTicket />
      <Place />
    </div>
  );
}
