# Next.js & HeroUI Template

# Student Course Dashboard

Live Link: https://sa-soft-institute-online.vercel.app
Git Link: https://github.com/EngrArfin/online-school-client-course-app

Softmax Online School's Student Course Dashboard is a Next.js-based platform for students, instructors, and administrators to manage and interact with online courses. The dashboard includes role-based functionalities and a responsive, visually appealing design.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

## Project Overview

The Student Course Dashboard is a role-based system with three user roles:

- **Admin**: Full control over the platform, including user and course management, analytics, and reporting.
- **Instructor**: Create, edit, and manage courses, track student engagement, and respond to student queries.
- **Student**: View enrolled courses, track progress, complete lessons, and submit feedback or reviews.

Key Features:

- Role-based navigation and access control.
- Fully responsive design using **Tailwind CSS**.
- Interactive visual elements like progress bars and pie charts.
- Dynamic permission updates for roles.
- Mocked APIs for data simulation.
- Authentication using **NextAuth.js**.

## Features and Functionality

### Admin Dashboard

- Manage users, roles, and permissions.
- View site analytics (e.g., total users, courses, and student progress).
- Generate reports (e.g., top-performing courses, user activity).

### Instructor Dashboard

- Create, edit, and manage courses with detailed descriptions, prices, and prerequisites.
- View student engagement metrics (e.g., lesson completion rates).
- Respond to student queries.

### Student Dashboard

- View enrolled courses and track progress with interactive visualizations.
- Access course materials, mark lessons as complete, and submit feedback.
- View detailed course information, including lesson lists, instructor details, and progress indicators.
- Download course materials and take quizzes.

### Additional Features

- **Role-Based Navigation**: The navigation bar updates dynamically based on the logged-in user's role.
- **Dynamic Permission Updates**: Admins can modify roles and permissions, and changes reflect immediately.
- **Responsive Design**: Optimized for mobile, tablet, and desktop using Tailwind CSS.
- **Interactive UI**: Includes modals, hover effects, and validation for enhanced user interaction.

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **State Management**: React Context
- **TypeScript**: Ensures type safety
- **Deployment**: Vercel
- **Mock APIs**: JSON or local state for data simulation

## How to Run the Project Locally

### Prerequisites

1. Install **Node.js** (v18 or above) and **npm**.
2. Install **Git**.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/EngrArfin/online-school-client-course-app
   cd student-course-dashboard
   ```

````


### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
````

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
