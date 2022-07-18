import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@goosebumps/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import useUserAgent from 'hooks/useUserAgent'
import useScrollOnRouteChange from 'hooks/useScrollOnRouteChange'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { useFetchProfile } from 'state/profile/hooks'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import SubgraphHealthIndicator from 'components/SubgraphHealthIndicator'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import EasterEgg from './components/EasterEgg'
import GlobalCheckClaimStatus from './components/GlobalCheckClaimStatus'
import history from './routerHistory'
// Views included in the main bundle
import Pools from './views/Pools'
import Swap from './views/Swap'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from './views/AddLiquidity/redirects'
import RedirectOldRemoveLiquidityPathStructure from './views/RemoveLiquidity/redirects'
import { RedirectPathToSwapOnly, RedirectToSwap } from './views/Swap/redirects'
import { useInactiveListener } from './hooks/useInactiveListener'
import useSentryUser from './hooks/useSentryUser'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))
const AddLiquidity = lazy(() => import('./views/AddLiquidity'))
const RemoveLiquidity = lazy(() => import('./views/RemoveLiquidity'))
const Bridge = lazy(() => import('./views/Bridge'))
const PortfolioTracker = lazy(() => import('./views/PortfolioTracker'))
const Charts = lazy(() => import('./views/Charts'))
const Liquidity = lazy(() => import('./views/Pool'))
const PoolFinder = lazy(() => import('./views/PoolFinder'))

const Farms = lazy(() => import('./views/Farms'))
const FarmAuction = lazy(() => import('./views/FarmAuction'))
const Lottery = lazy(() => import('./views/Lottery'))
const Ifos = lazy(() => import('./views/Ifos'))
const Teams = lazy(() => import('./views/Teams'))
const Team = lazy(() => import('./views/Teams/Team'))
const TradingCompetition = lazy(() => import('./views/TradingCompetition'))
const Predictions = lazy(() => import('./views/Predictions'))
const PredictionsLeaderboard = lazy(() => import('./views/Predictions/Leaderboard'))
const Voting = lazy(() => import('./views/Voting'))
const Proposal = lazy(() => import('./views/Voting/Proposal'))
const CreateProposal = lazy(() => import('./views/Voting/CreateProposal'))
const Info = lazy(() => import('./views/Info'))
const NftMarket = lazy(() => import('./views/Nft/market'))
const ProfileCreation = lazy(() => import('./views/ProfileCreation'))
const PancakeSquad = lazy(() => import('./views/PancakeSquad'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account } = useWeb3React()

  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  usePollCoreFarmData()
  useScrollOnRouteChange()
  useUserAgent()
  useInactiveListener()
  useSentryUser()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <GlobalCheckClaimStatus excludeLocations={[]} />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/farms/auction">
              <FarmAuction />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/stake">
              <Pools />
            </Route>
            <Route path="/bridge">
              <Bridge />
            </Route>
            <Route exact path="/portfolio-tracker" render={() => <PortfolioTracker />} />
            {/* <Route path="/portfolio-tracker/:networkName/:addresses"> */}
            <Route exact path="/portfolio-tracker/:networkName/:address" render={() => <PortfolioTracker />} />
            {/* <PortfolioTracker />
            </Route> */}
            <Route exact path="/charts" render={() => <Charts />} />
            <Route exact path="/charts/:networkName/:address" render={() => <Charts />} />
            <Route exact path="/charts/:networkName/:address/:pairAddress" render={() => <Charts />} />

            {/* Using this format because these components use routes injected props. We need to rework them with hooks */}
            <Route exact strict path="/swap" component={Swap} />
            <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
            <Route exact strict path="/liquidityFindToken" component={PoolFinder} />
            <Route exact strict path="/liquidity" component={Liquidity} />
            <Route exact path="/liquidityAdd" component={AddLiquidity} />
            <Route exact path="/liquidityAdd/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
            <Route exact path="/liquidityAdd/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />

            <Route exact strict path="/create" component={RedirectToAddLiquidity} />
            <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
            <Route exact path="/create" component={AddLiquidity} />
            <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
            <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
            <Route exact strict path="/liquidityRemove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
            <Route exact strict path="/liquidityRemove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />

            {/* Redirect */}
            <Route path="/pool">
              <Redirect to="/liquidity" />
            </Route>
            <Route path="/pools">
              <Redirect to="/stake" />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <EasterEgg iterations={2} />
      <ToastListener />
      <SubgraphHealthIndicator />
    </Router>
  )
}

export default React.memo(App)
