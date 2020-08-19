<template>
  <div class="m-container">
    <div class="info-wrapper">
      <div class="img-wrapper">
        <img src="../assets/profile.jpg" class="img">
      </div>
      <div class="my-info">
        <h1 class="name">Tammanoon Jomjaturong</h1>
        <p class="address">Address : 126 KMUTT Prachautid road Bangmod Thungkru
          Bangkok 10140</p>
        <p class="contact">
          Email : tammanoon.max@mail.kmutt.ac.th <br/>
          Tel : 0647200197<br/>
          Github : Mizimax
        </p>
      </div>
    </div>
    <div class="main-content">
      <div class="col-12 col-sm-6 basic-info">
        <div class="content-wrapper introduction-wrapper">
          <div class="header --topic">Introduction</div>
          <p class="content">
            Hello i'm Max. I’ve graduated from KMUTT.
            Currently, i've been a software engineer at SCG Digital Office for 2 months.
            My work skills are Flutter and Flask.
            My english is good at reading, writing.
            but speaking is beginner. I'm currently improving my English skills.
            I’m familiar with agile process.
            I’m a fast learner, hard worker and
            high responsibility.
          </p>
        </div>
        <div class="content-wrapper academic-wrapper">
          <div class="header --topic">Academic History</div>
          <p class="content">
            KING MONGKUT'S UNIVERSITY OF TECHNOLOGY
            THONBURI<br/>
            2016 - 2020<br/>
            B.Eng. Computer Engineering
          </p>
        </div>
        <div class="content-wrapper activity-wrapper">
          <div class="header --topic">Current work</div>
          <ul>
            <li>I've been a Software Engineer at SCG Digital Office for 1.5 months.</li>
            <li>Developing mobile application and RESTful API.</li>
            <li>Flutter(dart), Flask(python) and PostgreSQL.</li>
            <li>Test Driven Development, CI/CD.</li>
          </ul>
        </div>
        <div class="content-wrapper skill-wrapper">
          <div class="header --topic">My skills</div>
          <ul>
            <li>Flutter (Prefer, Moderate)</li>
            <li>React(Hook) (Moderate)</li>
            <li>Angular 2, 4, 8 (Fluent)</li>
            <li>Ionic (Fluent)</li>
            <li>Android, Swift (Beginner)</li>
            <li>Vue.js, Vuex (Beginner)</li>
            <li>HTML, CSS, SCSS, Javascript (Fluent)</li>
            <li>PHP Laravel Framework (Fluent)</li>
            <li>Node.js (Moderate)</li>
            <li>Flask, Python (Beginner)</li>
            <li>Mysql (Fluent)</li>
            <li>Docker (Beginner)</li>
            <li>MongoDB (Beginner)</li>
          </ul>
        </div>
        <div class="content-wrapper activity-wrapper">
          <div class="header --topic">Activities</div>
          <ul>
            <li>Comcamp 30 CPE KMUTT</li>
            <li>Young Webmaster Camp 15 (Web developer)</li>
            <li>Dek-d internship (React)</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-sm-6 work-wrapper">
        <div class="header --topic">Experience</div>
        <div class="exp-wrapper">
          <div class="header">SCG Test</div>
          Online CV, Series calculation, Solve equation, Get Google map route data and Chatbot doesn't answer detection.
          (Vue.js, Node.js)<br/>
          <a class="mr-2" href="https://github.com/Mizimax/DOSCG" target="_blank">Github</a>
          <a href="https://doscgweb.herokuapp.com/" target="_blank">Demo</a>
        </div>
        <div class="exp-wrapper">
          <div class="header">Vehicle Tracking application</div>
          Vehicle Tracking app is my final project in
          university. To find route of vehicle which passes by
          the camera in Thailand.
          (React, Ionic, Lumen)<br/>
          <a class="mr-2" href="https://github.com/Mizimax/vehicle-tracking-app" target="_blank">Github</a>
          <a href="https://youtu.be/2vEEy0mtZKI" target="_blank">Demo</a>
        </div>
        <div class="exp-wrapper">
          <div class="header">Atmasterstudio (Freelance project)</div>
          The place where you can join an activity with
          interested master in famous studio.<br/>
          (Laravel, HTML, SCSS, Jquery)<br/>
          <a class="mr-2" href="https://github.com/Mizimax/masterstudio" target="_blank">Github</a>
          <a href="https://atmasterstudio.com" target="_blank">Demo</a>
        </div>
        <div class="exp-wrapper">
          <div class="header">Wezync</div>
          Startup project with my friends
          to bring people playing badminton together.<br/>
          (Laravel, HTML, CSS, Jquery)<br/>
          <a class="mr-2" href="https://github.com/Mizimax/badminton" target="_blank">Github</a>
          <a href="https://wezync.000webhostapp.com" target="_blank">Demo</a>
        </div>
        <div class="exp-wrapper">
          <div class="header">Fabric OTOP (Freelance project)</div>
          Fabric OTOP is AR application that inform about
          fabric in thailand. Using AR Technology to show
          video when user scan to a fabric image.<br/>
          Github :<br/>
          <a href="https://github.com/Mizimax/fabric" target="_blank">https://github.com/Mizimax/fabric</a> (Ionic, Angular)<br/>
          <a href="https://github.com/Mizimax/fabricIOS" target="_blank">https://github.com/Mizimax/fabricIOS</a> (Swift)<br/>
          <a href="https://github.com/Mizimax/fabric-api" target="_blank">https://github.com/Mizimax/fabric-api</a> (Laravel)<br/>
          <a href="https://youtu.be/5nOAEqTiX9o" target="_blank">Demo</a>
        </div>
        <div class="exp-wrapper">
          <div class="header">Young Webmaster Camp 16</div>
          Registration website for Young Webmaster Camp 16<br/>
          (HTML, SCSS, Jquery)<br/>
          <a class="mr-2" href="https://github.com/Mizimax/YWC16LandingPage" target="_blank">Github</a>
          <a href="https://ywc16.ywc.in.th" target="_blank">Demo</a>
        </div>
        <div class="exp-wrapper">
          <div class="header">Test for Young Webmaster Camp 15</div>
          Anouncement website for YWC14. Using YWC14 api.<br/>
          (Angular)<br/>
          <a class="mr-2" href="https://github.com/Mizimax/YWC15-HW" target="_blank">Github</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyCV',
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 50px auto;
    max-width: 990px;
    width: 100%;

    p {
      margin: 0;
    }

    .header {
      font-weight: bold;

      &.--topic {
        font-size: 18px;
        font-style: italic;
      }
    }

    > .info-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 30px 0;

      > .my-info {
        flex: 2;
        padding: 20px;
        align-self: center;
      }

      > .img-wrapper {
        flex: 1;
        text-align: center;

        > .img {
          width: 240px;
          border-radius: 50%;
        }
      }
    }

    > .main-content {
      display: flex;
      flex-wrap: wrap;

      > .basic-info {
        padding: 20px;

        .content-wrapper {
          margin-bottom: 20px;
        }
      }

      > .work-wrapper {
        padding: 20px;

        > .exp-wrapper {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
