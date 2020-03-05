import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
 public isCourse = true;
  courses = [
    {
      name: "Introduction to Web Development",
      level: "Beginner",
      color: "green"
    },
    {
      name: "Understanding APIs",
      level: "Beginner",
      color: "green"
    },
    {
      name: "Introduction to Docker Containers",
      level: "Advanced",
      color: "red"
    },
    {
      name: "Understanding Time complexities",
      level: "Advanced",
      color: "red"
    },
    {
      name: "Algorithms and Data Structures",
      level: "Advanced",
      color: "red"
    },
    {
      name: "My first HTML page",
      level: "Beginner",
      color: "green"
    },
    {
      name: "Ways to use CSS in your web page",
      level: "Beginner",
      color: "green"
    },
    {
      name: "Introduction to Unit testing",
      level: "Beginner",
      color: "green"
    },
    {
      name: "What are PWAs",
      level: "Beginner",
      color: "green"
    }
  ];

  constructor() {}
  ngOnInit() {}
}
