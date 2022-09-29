export default function ErrorNotification({ title }) {
  return (
    <div className="alert alert-danger" role="alert">
      {title}
    </div>
  );
}
