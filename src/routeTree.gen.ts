/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StudentdashboardImport } from './routes/student_dashboard'
import { Route as StatisticsImport } from './routes/statistics'
import { Route as SignupImport } from './routes/signup'
import { Route as NumbersoperationsImport } from './routes/numbers&operations'
import { Route as MysubjectsImport } from './routes/my_subjects'
import { Route as MeasuresImport } from './routes/measures'
import { Route as MathematicsImport } from './routes/mathematics'
import { Route as LoginImport } from './routes/login'
import { Route as LearnImport } from './routes/learn'
import { Route as GeometryImport } from './routes/geometry'
import { Route as EventsImport } from './routes/events'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as BillingImport } from './routes/billing'
import { Route as AlgebraImport } from './routes/algebra'
import { Route as IndexImport } from './routes/index'
import { Route as ProgresspageUseridImport } from './routes/progress_page.$user_id'
import { Route as EventsEventidImport } from './routes/events_.$event_id'
import { Route as TopicidSubtopicsImport } from './routes/$topic_id.sub_topics'
import { Route as TopicidStarttestImport } from './routes/$topic_id.start_test'
import { Route as SubjectidStartexamImport } from './routes/$subject_id.start_exam'
import { Route as SubjectidMytopicsImport } from './routes/$subject_id.my_topics'
import { Route as SubtopicidStartexerciseImport } from './routes/$sub_topic_id.start_exercise'
import { Route as SubtopicidContentImport } from './routes/$sub_topic_id.content'

// Create/Update Routes

const StudentdashboardRoute = StudentdashboardImport.update({
  path: '/student_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const StatisticsRoute = StatisticsImport.update({
  path: '/statistics',
  getParentRoute: () => rootRoute,
} as any)

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const NumbersoperationsRoute = NumbersoperationsImport.update({
  path: '/numbers&operations',
  getParentRoute: () => rootRoute,
} as any)

const MysubjectsRoute = MysubjectsImport.update({
  path: '/my_subjects',
  getParentRoute: () => rootRoute,
} as any)

const MeasuresRoute = MeasuresImport.update({
  path: '/measures',
  getParentRoute: () => rootRoute,
} as any)

const MathematicsRoute = MathematicsImport.update({
  path: '/mathematics',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LearnRoute = LearnImport.update({
  path: '/learn',
  getParentRoute: () => rootRoute,
} as any)

const GeometryRoute = GeometryImport.update({
  path: '/geometry',
  getParentRoute: () => rootRoute,
} as any)

const EventsRoute = EventsImport.update({
  path: '/events',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BillingRoute = BillingImport.update({
  path: '/billing',
  getParentRoute: () => rootRoute,
} as any)

const AlgebraRoute = AlgebraImport.update({
  path: '/algebra',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProgresspageUseridRoute = ProgresspageUseridImport.update({
  path: '/progress_page/$user_id',
  getParentRoute: () => rootRoute,
} as any)

const EventsEventidRoute = EventsEventidImport.update({
  path: '/events/$event_id',
  getParentRoute: () => rootRoute,
} as any)

const TopicidSubtopicsRoute = TopicidSubtopicsImport.update({
  path: '/$topic_id/sub_topics',
  getParentRoute: () => rootRoute,
} as any)

const TopicidStarttestRoute = TopicidStarttestImport.update({
  path: '/$topic_id/start_test',
  getParentRoute: () => rootRoute,
} as any)

const SubjectidStartexamRoute = SubjectidStartexamImport.update({
  path: '/$subject_id/start_exam',
  getParentRoute: () => rootRoute,
} as any)

const SubjectidMytopicsRoute = SubjectidMytopicsImport.update({
  path: '/$subject_id/my_topics',
  getParentRoute: () => rootRoute,
} as any)

const SubtopicidStartexerciseRoute = SubtopicidStartexerciseImport.update({
  path: '/$sub_topic_id/start_exercise',
  getParentRoute: () => rootRoute,
} as any)

const SubtopicidContentRoute = SubtopicidContentImport.update({
  path: '/$sub_topic_id/content',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/algebra': {
      preLoaderRoute: typeof AlgebraImport
      parentRoute: typeof rootRoute
    }
    '/billing': {
      preLoaderRoute: typeof BillingImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/events': {
      preLoaderRoute: typeof EventsImport
      parentRoute: typeof rootRoute
    }
    '/geometry': {
      preLoaderRoute: typeof GeometryImport
      parentRoute: typeof rootRoute
    }
    '/learn': {
      preLoaderRoute: typeof LearnImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/mathematics': {
      preLoaderRoute: typeof MathematicsImport
      parentRoute: typeof rootRoute
    }
    '/measures': {
      preLoaderRoute: typeof MeasuresImport
      parentRoute: typeof rootRoute
    }
    '/my_subjects': {
      preLoaderRoute: typeof MysubjectsImport
      parentRoute: typeof rootRoute
    }
    '/numbers&operations': {
      preLoaderRoute: typeof NumbersoperationsImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/statistics': {
      preLoaderRoute: typeof StatisticsImport
      parentRoute: typeof rootRoute
    }
    '/student_dashboard': {
      preLoaderRoute: typeof StudentdashboardImport
      parentRoute: typeof rootRoute
    }
    '/$sub_topic_id/content': {
      preLoaderRoute: typeof SubtopicidContentImport
      parentRoute: typeof rootRoute
    }
    '/$sub_topic_id/start_exercise': {
      preLoaderRoute: typeof SubtopicidStartexerciseImport
      parentRoute: typeof rootRoute
    }
    '/$subject_id/my_topics': {
      preLoaderRoute: typeof SubjectidMytopicsImport
      parentRoute: typeof rootRoute
    }
    '/$subject_id/start_exam': {
      preLoaderRoute: typeof SubjectidStartexamImport
      parentRoute: typeof rootRoute
    }
    '/$topic_id/start_test': {
      preLoaderRoute: typeof TopicidStarttestImport
      parentRoute: typeof rootRoute
    }
    '/$topic_id/sub_topics': {
      preLoaderRoute: typeof TopicidSubtopicsImport
      parentRoute: typeof rootRoute
    }
    '/events/$event_id': {
      preLoaderRoute: typeof EventsEventidImport
      parentRoute: typeof rootRoute
    }
    '/progress_page/$user_id': {
      preLoaderRoute: typeof ProgresspageUseridImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AlgebraRoute,
  BillingRoute,
  DashboardRoute,
  EventsRoute,
  GeometryRoute,
  LearnRoute,
  LoginRoute,
  MathematicsRoute,
  MeasuresRoute,
  MysubjectsRoute,
  NumbersoperationsRoute,
  SignupRoute,
  StatisticsRoute,
  StudentdashboardRoute,
  SubtopicidContentRoute,
  SubtopicidStartexerciseRoute,
  SubjectidMytopicsRoute,
  SubjectidStartexamRoute,
  TopicidStarttestRoute,
  TopicidSubtopicsRoute,
  EventsEventidRoute,
  ProgresspageUseridRoute,
])

/* prettier-ignore-end */
