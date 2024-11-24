import express from "express";
import bodyParser from "body-parser";
let articles = [
    {
        id: 0,
        title:"Productivity is calling!",
        content: "In today's fast-paced world, staying productive is key to achieving your goals. Productivity isn't just about working harder—it's about working smarter. It starts with setting clear, achievable goals and breaking them down into manageable steps. Prioritize your tasks by focusing on what truly matters and what will make the biggest impact. Eliminate distractions, whether they come from your environment or your mind, and commit to deep work during your most productive hours. Also, don't forget the importance of taking breaks to recharge—rest is essential for sustained productivity. Whether you're handling a major project or simply organizing your day, the right strategies can help you get more done in less time. Productivity is calling, and it's time to answer!",
        tags:"Lifestyle,Fitness",
    },
    {
      id: 1,
      title: "Mastering the Art of Digital Minimalism",
      content: "In 'Mastering the Art of Digital Minimalism,' we explore how simplifying your digital life can lead to greater focus and well-being. By reducing distractions and decluttering your digital space, you can create a more intentional, balanced relationship with technology. As we become increasingly dependent on digital tools, it's easy to get overwhelmed by the constant stream of notifications, messages, and media vying for our attention. This overexposure to digital stimuli can cause stress, anxiety, and a fragmented sense of focus.\n\nDigital minimalism is a practice centered on using technology purposefully rather than passively. Instead of allowing your devices to control your time, digital minimalism encourages you to evaluate which digital tools truly enhance your life. Whether it's social media, apps, or email, the goal is to focus on what’s essential and remove the rest. By doing so, you regain control over your time and attention, making room for the things that matter most, such as personal growth, relationships, and relaxation.\n\nIn a world where multitasking has become the norm, digital minimalism advocates for single-tasking and deep focus. Constantly switching between apps, emails, and notifications erodes our ability to concentrate and reduces productivity. Research shows that multitasking often leads to mental fatigue and decreased efficiency. Digital minimalism helps combat this by minimizing unnecessary digital noise and encouraging mindful engagement with technology.\n\nImplementing digital minimalism begins with conducting a personal audit of your digital habits. Take note of how much time you spend online and assess whether those activities are adding value to your life. From there, begin decluttering your devices by removing unused apps, organizing files, and turning off non-essential notifications. Small steps like setting designated times for checking emails or limiting social media use can create significant mental space and improve your focus.\n\nThe benefits of digital minimalism go beyond productivity. Practitioners often experience reduced stress, better sleep, and an overall sense of calm. By cutting down on screen time and engaging more with the physical world, you can strengthen relationships, develop hobbies, and enjoy moments of reflection without the constant interruption of digital devices.\n\nMastering the art of digital minimalism doesn’t mean abandoning technology altogether. It’s about using technology in a way that aligns with your values and goals, creating a healthier, more balanced approach to modern life. As you embrace digital minimalism, you’ll find greater peace, clarity, and purpose in both your online and offline worlds.",
      tags: "Tech Lifestyle, Productivity, Focus",
    },
    {
      id: 2,
      title: "How CSS Works",
       content: "CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall look of web pages, allowing developers to create visually appealing and responsive designs. CSS works by applying rules to HTML elements, selecting them based on tags, classes, IDs, or other attributes.\n\nOne of the key concepts of CSS is the cascade, where rules are applied in a specific order of precedence. This includes the source order of the styles, where styles defined later can override earlier ones, and the specificity of the selectors, where more specific selectors take priority over less specific ones. The cascade allows developers to write flexible and reusable CSS that adapts to different contexts.\n\nIn addition to the cascade, CSS uses inheritance to pass styles down from parent elements to their children. For example, if you set a font color on a parent element, all of its child elements will inherit that color unless otherwise specified. This helps simplify styling by reducing the need for repetitive code.\n\nAnother important aspect of CSS is the box model, which governs how elements are sized and spaced. Every HTML element is treated as a rectangular box, consisting of content, padding, borders, and margins. Understanding the box model is essential for controlling the spacing and layout of elements on a web page. By manipulating these properties, developers can create precise and adaptable layouts.\n\nCSS also allows for responsive design through media queries, which enable styles to change based on the size of the viewport or other conditions. This is crucial for creating websites that work well on a variety of devices, from desktops to mobile phones. With responsive design, CSS ensures that web pages look good and function properly across different screen sizes and orientations.\n\nBy mastering CSS, developers can transform static HTML into dynamic, interactive, and aesthetically pleasing websites. From layout and typography to animation and interactivity, CSS plays a critical role in shaping the user experience and bringing web designs to life.",
      tags: "CSS",
    },
    {
      id: 3,
      title: "Serverless Architecture: Simplifying Web Apps",
      content: "Serverless architecture represents a significant shift in how web applications are built and deployed. Contrary to its name, serverless does not mean there are no servers involved; rather, it signifies that developers do not need to manage the server infrastructure directly. Instead, serverless computing allows developers to focus on writing code without worrying about the underlying hardware or software that runs it.\n\nIn a serverless model, cloud providers like AWS, Azure, or Google Cloud handle the server management, scaling, and maintenance. This approach leverages functions as a service (FaaS), where developers write individual functions that respond to events. These functions run in stateless compute containers managed by the cloud provider, which automatically handles scaling based on the workload.\n\nOne of the key advantages of serverless architecture is its scalability. Since the cloud provider manages the infrastructure, applications can automatically scale up or down based on traffic and demand. This means you only pay for the compute resources you actually use, rather than provisioning and paying for a fixed amount of server capacity. This pay-as-you-go model can lead to significant cost savings, particularly for applications with unpredictable or fluctuating traffic.\n\nAnother benefit is the reduction in operational complexity. Developers are relieved from tasks such as server provisioning, patching, and capacity planning. This allows teams to deploy applications more quickly and iterate faster, as they can focus on coding and delivering features rather than managing infrastructure.\n\nServerless architecture also enhances flexibility and agility. Developers can deploy new features and updates independently, as the serverless model supports a modular approach to application development. Each function can be updated or deployed separately, allowing for more rapid development cycles and easier maintenance.\n\nHowever, there are considerations to keep in mind with serverless architecture. Cold start times, where functions may experience delays when first invoked after a period of inactivity, can impact performance. Additionally, serverless functions are often limited in execution time and resources, which can be a constraint for certain applications.\n\nOverall, serverless architecture simplifies the process of building and managing web applications by offloading infrastructure concerns to the cloud provider. This approach offers scalability, cost-efficiency, and reduced operational overhead, making it an attractive option for modern web development.",
      tags: "Web apps, Internet, Software Development",
    },
  ];

const app = express(); // Express application
app.use(bodyParser.urlencoded({extended:true})); // bodyParser middleware to manipulate request body
app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

app.get("https://mazenwael2004.github.io/Blog-Web-App/",(req,res)=>{
    res.render("home.ejs",{articles:articles});
})

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});

app.get("/view/:id",(req,res)=>{
    const articleId = req.params.id;
    const article = articles.find(a=> a.id === parseInt(articleId,10));
    if(article){
        res.render("view.ejs",{article});
    }
    else{
        res.status(404).render("error.ejs");
    }
});

app.get("/view",(req,res)=>{
    res.redirect("/");
});

app.get("/edit",(req,res)=>{
    res.render("edit.ejs");
});

app.post("/submit",(req,res)=>{
    const ID = parseInt(req.body.ID,10);
    const newArticle = {
       id: ID,
       tags: req.body.tag,
       content: req.body.content,
       title: req.body.title
    };
        
    articles.push(newArticle);
    res.redirect("/");
});


app.post("/submit2", (req, res) => {
    const articleID = req.body.ID;
    const article = articles.find(a => a.id === parseInt(articleID, 10));
    
    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;
        article.tags = req.body.tag;

        res.redirect("/"); 
    } else {
        res.status(404).render("error.ejs"); 
    }
});

