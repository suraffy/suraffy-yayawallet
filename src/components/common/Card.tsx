interface Props {
  header: string;
  body: string;
}

const Card = ({ header, body }: Props) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {header}
      </h5>
      <p className="font-normal text-gray-700">{body}</p>
    </div>
  );
};

export default Card;
