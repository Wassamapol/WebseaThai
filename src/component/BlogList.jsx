import React, { useState } from "react";

function BlogPost({ title, content, date, author, videoUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mb-6 bg-gray-800 rounded-lg shadow-md ">
      <h1 className="text-2xl font-bold text-white ">{title}</h1>
      <p className="text-sm text-white  mt-1">By {author} on {date}</p>
      <p className="mt-4 text-gray-100">
        {isExpanded ? content : `${content.slice(0, 100)}...`}
      </p>

      {/* แสดง YouTube วิดีโอเมื่อกด Read More */}
      {isExpanded && videoUrl && (
        <div className="mt-4">
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            frameBorder="5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      )}

      <button 
        className="mt-4 px-4 py-2 bg-cyan-900 text-white font-semibold rounded hover:bg-cyan-950"
        onClick={toggleReadMore}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

function Blog() {
  const blogPosts = [
    {
      title: "Puket",
      content: "ทะเลอันดามันเป็นทะเลที่ตั้งอยู่ทางตะวันตกของประเทศไทยและมีความสำคัญในด้านการท่องเที่ยวและเศรษฐกิจของภูมิภาคนี้...",
      date: "December 22, 2024",
      author: "วัสมพล เครืออารีย์",
      videoUrl: "https://www.youtube.com/embed/A26SEqR9DMQ"  // รูปแบบ URL ที่ถูกต้องสำหรับการฝังวิดีโอ
    },
    {
      title: "Andaman Sea",
      content: "อ่าวไทยตั้งอยู่ทางทิศใต้ของประเทศไทยและเป็นส่วนหนึ่งของทะเลจีนใต้...",
      date: "December 20, 2024",
      author: "วัสมพล เครืออารีย์",
      videoUrl: "https://www.youtube.com/embed/dtoQI6cyE-k"  // รูปแบบ URL ที่ถูกต้องสำหรับการฝังวิดีโอ
    },
    {
      title: "Ao Nang Beach",
      content: "อ่าวนางตั้งอยู่ในจังหวัดกระบี่และเป็นหนึ่งในชายหาดที่มีชื่อเสียงที่สุดในภาคใต้...",
      date: "December 20, 2024",
      author: "วัสมพล เครืออารีย์",
      videoUrl: "https://www.youtube.com/embed/9do_RamljHE"  // รูปแบบ URL ที่ถูกต้องสำหรับการฝังวิดีโอ
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">History</h1>
      {blogPosts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          content={post.content}
          date={post.date}
          author={post.author}
          videoUrl={post.videoUrl}  // ส่ง video URL
        />
      ))}
    </div>
  );
}

export default Blog;
