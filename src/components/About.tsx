
interface Props {
  intro: string;
}

const MyPhotoWithIntro: React.FC<Props> = ({ intro }) => {
  return (
    <div>
      <img src="/my-photo.png" alt="My photo" />
      <p>{intro}</p>
    </div>
  );
};

export default MyPhotoWithIntro;