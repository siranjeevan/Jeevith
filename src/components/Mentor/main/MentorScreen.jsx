import Layout from "../Layout.jsx";
import MentorCard from "../MentorCard.jsx";

function MentorScreen() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10 ">
          <MentorCard path="/palanianna.png" MentorName="Jeevith" MentorJob="Senior Developer" />
          <MentorCard path="/Mentar.png" MentorName="Jeevith" MentorJob="Senior Developer" />
          <MentorCard path="/Mentar.png" MentorName="Jeevith" MentorJob="Senior Developer" />
          <MentorCard path="/Mentar.png" MentorName="Jeevith" MentorJob="Senior Developer" />
          
        </div>
      </div>
    </Layout>
  );
}

export default MentorScreen;
