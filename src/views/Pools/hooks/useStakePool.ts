import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stakeFarm } from 'utils/calls'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import { useMasterchef, useSousChef, useStakingContract } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

// const sousStake = async (sousChefContract, amount, decimals = 18) => {
//   const gasPrice = getGasPrice()
//   const tx = await sousChefContract.deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), {
//     ...options,
//     gasPrice,
//   })
//   const receipt = await tx.wait()
//   return receipt.status
// }

// const sousStakeBnb = async (sousChefContract, amount) => {
//   const gasPrice = getGasPrice()
//   const tx = await sousChefContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
//     ...options,
//     gasPrice,
//   })
//   const receipt = await tx.wait()
//   return receipt.status
// }

// const useStakePoolOld = (sousId: number, isUsingBnb = false) => {
//   const dispatch = useAppDispatch()
//   const { account } = useWeb3React()
//   const masterChefContract = useMasterchef()
//   const sousChefContract = useSousChef(sousId)

//   const handleStake = useCallback(
//     async (amount: string, decimals: number) => {
//       if (sousId === 0) {
//         await stakeFarm(masterChefContract, 0, amount)
//       } else if (isUsingBnb) {
//         await sousStakeBnb(sousChefContract, amount)
//       } else {
//         await sousStake(sousChefContract, amount, decimals)
//       }
//       dispatch(updateUserStakedBalance(sousId, account))
//       dispatch(updateUserBalance(sousId, account))
//     },
//     [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId],
//   )

//   return { onStake: handleStake }
// }

const useStakePool = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const stakingContract = useStakingContract(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      await stakeFarm(stakingContract, amount, decimals)
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, stakingContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStakePool
