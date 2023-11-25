"use client";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from "axios";
import Toolbar from "./Toolbar";
import Event from "./Event";
import Modal from "./Modal";

const mLocalizer = momentLocalizer(moment);

const Events = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState();
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=startTime&timeMin=${new Date(
          new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
        ).toISOString()}&timeMax=${new Date(
          new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
        ).toISOString()}`
      )
      .then((response) => {
        const {
          data: { items },
        } = response;

        items.forEach((item) => {
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
        });

        setEvents(items);
      });
  }, []);

  return (
    <div className="relative h-screen w-11/12">
      {event && <Modal event={event} setEvent={setEvent} />}
      {events && (
        <Calendar
          date={date}
          view={view}
          className="py-4"
          events={events.filter((event) => !event.hidden)}
          localizer={mLocalizer}
          defaultView="month"
          views={["month", "week"]}
          onNavigate={(newDate) => setDate(newDate)}
          onView={(newView) => setView(newView)}
          components={{
            event: Event,
            toolbar: Toolbar,
          }}
          eventPropGetter={() => {
            return { className: "!bg-design-green" };
          }}
          dayPropGetter={(event) => {
            const bg =
              new Date(event).toLocaleDateString() ==
              new Date().toLocaleDateString()
                ? "!bg-design-orange"
                : "!bg-white";
            return {
              className: bg,
              style: {
                margin: 0,
                padding: 0,
              },
            };
          }}
          onSelectEvent={(event) => setEvent(event)}
        />
      )}
    </div>
  );
};

export default Events;
