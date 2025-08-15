/* Sửa file này để tạo Portfolio cá nhân của bạn */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Màn hình chờ (Splash Screen)
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};

// Phần Tóm tắt và Lời chào
const illustration = {
  animated: false
};

const greeting = {
  username: "Thắng Nguyễn",
  title: "Xin chào, mình là Thắng",
  subTitle: emoji(
    "Một sinh viên năm 4 đam mê game với kinh nghiệm về AI tạo sinh (Gen AI) và các Mô hình Ngôn ngữ Lớn (LLMs) . Mình đam mê ứng dụng AI để xây dựng những hệ thống thông minh và trải nghiệm đột phá cho người chơi."
  ),
  resumeLink:
    "link-toi-CV-cua-ban.pdf",
  displayGreeting: true
};

// Liên kết mạng xã hội
const socialMediaLinks = {
  github: "https://github.com/happyghost2003",
  linkedin: "https://www.linkedin.com/in/thang-nguyen-tran-huu-369702302/",
  gmail: "huuthanglovely@gmail.com",
  display: true
};

// Phần Kỹ năng
const skillsSection = {
  title: "Thế mạnh của mình",
  subTitle: "KẾT HỢP TƯ DUY THIẾT KẾ SÁNG TẠO VỚI KỸ NĂNG CHUYÊN SÂU VỀ TRÍ TUỆ NHÂN TẠO",
  skills: [
    emoji(
      "⚡ Thiết kế và phát triển game 2D bằng Unity, tập trung vào cơ chế gameplay và trải nghiệm người dùng."
    ),
    emoji(
      "⚡ Có kinh nghiệm làm việc với AI, đặc biệt là các Mô hình Ngôn ngữ Lớn (LLMs), Gen AI và kỹ thuật RLHF."
    ),
    emoji(
      "⚡ Ứng dụng kiến thức về AI để thiết kế hệ thống NPC thông minh, sinh nội dung tự động và các tính năng game sáng tạo."
    ),
    emoji(
      "⚡ Chú giải Dữ liệu (Data Annotation) cho các dự án AI lớn, đảm bảo chất lượng dữ liệu đầu vào cho mô hình."
    )
  ],

  // Các công cụ và phần mềm mình thành thạo
  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AI / LLMs",
      fontAwesomeClassname: "fas fa-robot" // Tạm thời đổi sang icon này để test 
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true
};

// Phần Học vấn
const educationInfo = {
  display: false, // Đặt là false nếu bạn không muốn hiển thị
  schools: [
    {
      schoolName: "Trường Đại học Công nghiệp TP.HCM (IUH)", // Điền tên trường của bạn
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Chuyên ngành của bạn",
      duration: "Năm bắt đầu - Năm kết thúc",
      desc: "Các môn học hoặc đồ án liên quan đến Game, AI...",
      descBullets: [
        "Hoàn thành đồ án game 2D 'getting to iuh' bằng Unity."
      ]
    }
  ]
};

// Các mảng kỹ năng chính
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Thiết kế & Phát triển Game Unity",
      progressPercentage: "50%"
    },
    {
      Stack: "AI / LLMs / Data Annotation",
      progressPercentage: "70%"
    },
    {
      Stack: "Phát triển Web",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false
};

// Kinh nghiệm làm việc
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Remote AI Trainer Specialist",
      company: "SoftAge Information Technology Limited",
      companylogo: require("/Users/thang/Documents/Projects/developerFolio/src/assets/images/softage_information_technology_logo.jpeg"), // <-- THAY BẰNG LOGO SCOLAGE
      date: "Tháng 6 2024 – Hiện tại",
      desc: "Làm việc từ xa với vai trò Chuyên gia Huấn luyện AI, tập trung vào việc cải thiện và phát triển các mô hình Trí tuệ Nhân tạo.",
      descBullets: [
        "Đánh giá và tinh chỉnh các mô hình AI để đảm bảo chất lượng và hiệu suất.",
        "Phân tích dữ liệu và cung cấp phản hồi chi tiết để cải thiện thuật toán."
      ]
    },
    {
      role: "Data Annotator",
      company: "Centific",
      companylogo: require("/Users/thang/Documents/Projects/developerFolio/src/assets/images/centificglobal_logo.jpeg"), // <-- THAY BẰNG LOGO CENTIFIC
      date: "Tháng 2 2024 – Tháng 5 2024",
      desc: "Thực hiện chú giải dữ liệu với độ chính xác cao cho các dự án AI lớn, phục vụ khách hàng là các tập đoàn công nghệ hàng đầu.",
      descBullets: [
        "Đảm bảo chất lượng dữ liệu đầu vào cho việc huấn luyện các mô hình học máy."
      ]
    },
    {
      role: "AI Agent",
      company: "Outlier",
      companylogo: require("/Users/thang/Documents/Projects/developerFolio/src/assets/images/try_outlier_logo.jpeg"), // <-- THAY BẰNG LOGO OUTLIER
      date: "Tháng 3 2023 – Tháng 8 2023",
      desc: "Đóng vai trò là một AI Agent, thực hiện các tác vụ đánh giá và huấn luyện mô hình AI dựa trên phản hồi của con người (RLHF).",
      descBullets: [
        "Làm việc với các mô hình ngôn ngữ lớn (LLMs) và các kỹ thuật AI tạo sinh (Gen AI).",
        "Đóng góp vào việc cải thiện sự an toàn và hiệu quả của các mô hình AI."
      ]
    }
  ]
};

/* Phần Dự án Mã nguồn mở để hiển thị các dự án đã ghim trên Github của bạn */
const openSource = {
  showGithubProfile: "true", // Đặt true hoặc false để hiển thị hồ sơ Github trong phần Liên hệ
  display: false // Đặt thành false để ẩn phần này
};

// Phần Dự án nổi bật
const bigProjects = {
  title: "Dự án nổi bật",
  subtitle: "CÁC SẢN PHẨM GAME, AI VÀ WEB MÀ MÌNH ĐÃ XÂY DỰNG",
  projects: [
    {
      image: require("/Users/thang/Documents/Projects/developerFolio/src/assets/images/611D46F2-F35A-4109-AAC4-EE1790DAB30D.png"),
      projectName: "Getting to IUH (Game 2D)",
      projectDesc: "Một trò chơi 2D phát triển bằng Unity, mô phỏng lại hành trình đầy thử thách của sinh viên để đến được trường IUH.",
      // BẠN HÃY MÔ TẢ CHI TIẾT HƠN VỀ GAME Ở ĐÂY
      
    },
    {
      image: require("/Users/thang/Documents/Projects/developerFolio/src/assets/images/Ảnh chụp Màn hình 2025-08-15 lúc 20.04.08.png"),
      projectName: "Web Projects Collection",
      projectDesc: "Một số dự án web để rèn luyện kỹ năng lập trình, bao gồm trang bán hàng (quần áo, xe máy) và trang dự báo thời tiết.",
      
    }
  ],
  display: true
};

// Phần Thành tựu
const achievementSection = {
  display: false, // Mình tạm ẩn đi, nếu bạn có giải thưởng hay chứng chỉ thì đặt là "true" và điền vào nhé
  title: emoji("Thành tựu và Chứng chỉ 🏆 "),
  subtitle: "...",
  achievementsCards: [
    // Điền các thành tựu của bạn vào đây
  ]
};

// Các phần dưới đây mình tạm ẩn đi để portfolio tập trung vào kinh nghiệm và dự án chính của bạn
// Bạn có thể đặt "display: true" để hiện lại nếu muốn

const blogSection = {
  display: false,
  title: "Blogs",
  subtitle: "...",
  blogs: [],
  displayMediumBlogs: "false"
};

const talkSection = {
  display: false,
  title: "TALKS",
  subtitle: "...",
  talks: []
};

const podcastSection = {
  display: false,
  title: "Podcast 🎙️",
  subtitle: "...",
  podcast: []
};

const resumeSection = {
  display: true,
  title: "CV của mình",
  subtitle: "Bạn có thể xem và tải về CV chi tiết của mình"
};

const contactInfo = {
  title: emoji("Liên hệ với mình ☎️"),
  
  number: "0585734855",
  email_address: "huuthanglovely@gmail.com"
};

const twitterDetails = {
  userName: "ten-twitter-cua-ban",
  display: false // Ẩn đi nếu bạn không dùng Twitter nhiều
};

const isHireable = true; // Rất quan trọng, đặt là true!

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};