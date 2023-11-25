const Event = ({ event }) => {
  return (
    <div className="p-0.5">
      <p className="inline text-xs">
        {event.summary}
        <>
          {" - "}
          {new Date(event.start).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </>
      </p>
    </div>
  );
};

export default Event;
