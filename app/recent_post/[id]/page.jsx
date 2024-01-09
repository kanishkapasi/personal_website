import { useNavigation } from "next/navigation";

import interiorOne from "../../../public/interiror_site/desktop-view.png";
import interiroTwo from "../../../public/interiror_site/desktopview2.png";
import interiorThree from "../../../public/interiror_site/desktopview3.png";
import interiorFour from "../../../public/interiror_site/desktopview4.png";
import interiorFive from "../../../public/interiror_site/desktopview5.png";
import interiorSix from "../../../public/interiror_site/mobileView.png";
import interiorSeven from "../../../public/interiror_site/mobileview2.png";

const data = [
  {
    id: "1",
    description: "Description for post 1",
    image: [
      { imageOne: interiorOne },
      { imageTwo: interiroTwo },
      { imageThree: interiorThree },
      { imageFour: interiorFour },
      { imageFive: interiorFive },
      { imageSix: interiorSix },
      { imageSeven: interiorSeven },
    ],
  },
];

const OneDetails = () => {
  const navigation = useNavigation();
  const { id } = navigation.params;

  // Find the post in data array based on the id parameter
  const selectedPost = data.find((post) => post.id === id);

  // Check if post with the given id exists
  if (!selectedPost) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{selectedPost.id}</h1>
      <p>{selectedPost.description}</p>
      {/* You can map over selectedPost.image to display the images */}
      {selectedPost.image.map((image, index) => (
        <img
          key={index}
          src={Object.values(image)[0]}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default OneDetails;
