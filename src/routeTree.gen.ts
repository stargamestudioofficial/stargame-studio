/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ArtistsRouteImport } from './routes/artists'
import { Route as ArtworkRouteImport } from './routes/artwork'
import { Route as AuthRouteImport } from './routes/auth'
import { Route as CommissionRouteImport } from './routes/commission'
import { Route as EducationRouteImport } from './routes/education'
import { Route as FaqRouteImport } from './routes/faq'
import { Route as FeedRouteImport } from './routes/feed'
import { Route as InboxRouteImport } from './routes/inbox'
import { Route as InvestorsRouteImport } from './routes/investors'
import { Route as PayRouteImport } from './routes/pay'
import { Route as ProfileRouteImport } from './routes/profile'
import { Route as WhyHumanArtRouteImport } from './routes/why-human-art'
import { Route as ServicesIndexRouteImport } from './routes/services.index'
import { Route as ServicesSlugRouteImport } from './routes/services.$slug'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const AboutRoute = AboutRouteImport.update({ id: '/about', path: '/about', getParentRoute: () => rootRouteImport } as any)
const ArtistsRoute = ArtistsRouteImport.update({ id: '/artists', path: '/artists', getParentRoute: () => rootRouteImport } as any)
const ArtworkRoute = ArtworkRouteImport.update({ id: '/artwork', path: '/artwork', getParentRoute: () => rootRouteImport } as any)
const AuthRoute = AuthRouteImport.update({ id: '/auth', path: '/auth', getParentRoute: () => rootRouteImport } as any)
const CommissionRoute = CommissionRouteImport.update({ id: '/commission', path: '/commission', getParentRoute: () => rootRouteImport } as any)
const EducationRoute = EducationRouteImport.update({ id: '/education', path: '/education', getParentRoute: () => rootRouteImport } as any)
const FaqRoute = FaqRouteImport.update({ id: '/faq', path: '/faq', getParentRoute: () => rootRouteImport } as any)
const FeedRoute = FeedRouteImport.update({ id: '/feed', path: '/feed', getParentRoute: () => rootRouteImport } as any)
const InboxRoute = InboxRouteImport.update({ id: '/inbox', path: '/inbox', getParentRoute: () => rootRouteImport } as any)
const InvestorsRoute = InvestorsRouteImport.update({ id: '/investors', path: '/investors', getParentRoute: () => rootRouteImport } as any)
const PayRoute = PayRouteImport.update({ id: '/pay', path: '/pay', getParentRoute: () => rootRouteImport } as any)
const ProfileRoute = ProfileRouteImport.update({ id: '/profile', path: '/profile', getParentRoute: () => rootRouteImport } as any)
const WhyHumanArtRoute = WhyHumanArtRouteImport.update({ id: '/why-human-art', path: '/why-human-art', getParentRoute: () => rootRouteImport } as any)
const ServicesIndexRoute = ServicesIndexRouteImport.update({ id: '/services/', path: '/services/', getParentRoute: () => rootRouteImport } as any)
const ServicesSlugRoute = ServicesSlugRouteImport.update({ id: '/services/$slug', path: '/services/$slug', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/artists': typeof ArtistsRoute
  '/artwork': typeof ArtworkRoute
  '/auth': typeof AuthRoute
  '/commission': typeof CommissionRoute
  '/education': typeof EducationRoute
  '/faq': typeof FaqRoute
  '/feed': typeof FeedRoute
  '/inbox': typeof InboxRoute
  '/investors': typeof InvestorsRoute
  '/pay': typeof PayRoute
  '/profile': typeof ProfileRoute
  '/why-human-art': typeof WhyHumanArtRoute
  '/services/$slug': typeof ServicesSlugRoute
  '/services/': typeof ServicesIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/artists': typeof ArtistsRoute
  '/artwork': typeof ArtworkRoute
  '/auth': typeof AuthRoute
  '/commission': typeof CommissionRoute
  '/education': typeof EducationRoute
  '/faq': typeof FaqRoute
  '/feed': typeof FeedRoute
  '/inbox': typeof InboxRoute
  '/investors': typeof InvestorsRoute
  '/pay': typeof PayRoute
  '/profile': typeof ProfileRoute
  '/why-human-art': typeof WhyHumanArtRoute
  '/services/$slug': typeof ServicesSlugRoute
  '/services': typeof ServicesIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/artists': typeof ArtistsRoute
  '/artwork': typeof ArtworkRoute
  '/auth': typeof AuthRoute
  '/commission': typeof CommissionRoute
  '/education': typeof EducationRoute
  '/faq': typeof FaqRoute
  '/feed': typeof FeedRoute
  '/inbox': typeof InboxRoute
  '/investors': typeof InvestorsRoute
  '/pay': typeof PayRoute
  '/profile': typeof ProfileRoute
  '/why-human-art': typeof WhyHumanArtRoute
  '/services/$slug': typeof ServicesSlugRoute
  '/services/': typeof ServicesIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/artists' | '/artwork' | '/auth' | '/commission' | '/education' | '/faq' | '/feed' | '/inbox' | '/investors' | '/pay' | '/profile' | '/why-human-art' | '/services/$slug' | '/services/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/artists' | '/artwork' | '/auth' | '/commission' | '/education' | '/faq' | '/feed' | '/inbox' | '/investors' | '/pay' | '/profile' | '/why-human-art' | '/services/$slug' | '/services'
  id: '__root__' | '/' | '/about' | '/artists' | '/artwork' | '/auth' | '/commission' | '/education' | '/faq' | '/feed' | '/inbox' | '/investors' | '/pay' | '/profile' | '/why-human-art' | '/services/$slug' | '/services/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ArtistsRoute: typeof ArtistsRoute
  ArtworkRoute: typeof ArtworkRoute
  AuthRoute: typeof AuthRoute
  CommissionRoute: typeof CommissionRoute
  EducationRoute: typeof EducationRoute
  FaqRoute: typeof FaqRoute
  FeedRoute: typeof FeedRoute
  InboxRoute: typeof InboxRoute
  InvestorsRoute: typeof InvestorsRoute
  PayRoute: typeof PayRoute
  ProfileRoute: typeof ProfileRoute
  WhyHumanArtRoute: typeof WhyHumanArtRoute
  ServicesSlugRoute: typeof ServicesSlugRoute
  ServicesIndexRoute: typeof ServicesIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/about': { id: '/about'; path: '/about'; fullPath: '/about'; preLoaderRoute: typeof AboutRouteImport; parentRoute: typeof rootRouteImport }
    '/artists': { id: '/artists'; path: '/artists'; fullPath: '/artists'; preLoaderRoute: typeof ArtistsRouteImport; parentRoute: typeof rootRouteImport }
    '/artwork': { id: '/artwork'; path: '/artwork'; fullPath: '/artwork'; preLoaderRoute: typeof ArtworkRouteImport; parentRoute: typeof rootRouteImport }
    '/auth': { id: '/auth'; path: '/auth'; fullPath: '/auth'; preLoaderRoute: typeof AuthRouteImport; parentRoute: typeof rootRouteImport }
    '/commission': { id: '/commission'; path: '/commission'; fullPath: '/commission'; preLoaderRoute: typeof CommissionRouteImport; parentRoute: typeof rootRouteImport }
    '/education': { id: '/education'; path: '/education'; fullPath: '/education'; preLoaderRoute: typeof EducationRouteImport; parentRoute: typeof rootRouteImport }
    '/faq': { id: '/faq'; path: '/faq'; fullPath: '/faq'; preLoaderRoute: typeof FaqRouteImport; parentRoute: typeof rootRouteImport }
    '/feed': { id: '/feed'; path: '/feed'; fullPath: '/feed'; preLoaderRoute: typeof FeedRouteImport; parentRoute: typeof rootRouteImport }
    '/inbox': { id: '/inbox'; path: '/inbox'; fullPath: '/inbox'; preLoaderRoute: typeof InboxRouteImport; parentRoute: typeof rootRouteImport }
    '/investors': { id: '/investors'; path: '/investors'; fullPath: '/investors'; preLoaderRoute: typeof InvestorsRouteImport; parentRoute: typeof rootRouteImport }
    '/pay': { id: '/pay'; path: '/pay'; fullPath: '/pay'; preLoaderRoute: typeof PayRouteImport; parentRoute: typeof rootRouteImport }
    '/profile': { id: '/profile'; path: '/profile'; fullPath: '/profile'; preLoaderRoute: typeof ProfileRouteImport; parentRoute: typeof rootRouteImport }
    '/why-human-art': { id: '/why-human-art'; path: '/why-human-art'; fullPath: '/why-human-art'; preLoaderRoute: typeof WhyHumanArtRouteImport; parentRoute: typeof rootRouteImport }
    '/services/': { id: '/services/'; path: '/services'; fullPath: '/services/'; preLoaderRoute: typeof ServicesIndexRouteImport; parentRoute: typeof rootRouteImport }
    '/services/$slug': { id: '/services/$slug'; path: '/services/$slug'; fullPath: '/services/$slug'; preLoaderRoute: typeof ServicesSlugRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ArtistsRoute,
  ArtworkRoute,
  AuthRoute,
  CommissionRoute,
  EducationRoute,
  FaqRoute,
  FeedRoute,
  InboxRoute,
  InvestorsRoute,
  PayRoute,
  ProfileRoute,
  WhyHumanArtRoute,
  ServicesSlugRoute,
  ServicesIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}
