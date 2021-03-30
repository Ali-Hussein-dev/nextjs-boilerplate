import { Spinner } from '@chakra-ui/react';
import * as React from 'react';
import { TiInfoOutline } from 'react-icons/ti';

interface CondCompT extends React.ComponentPropsWithoutRef<'div'> {
  baseCond: boolean;
  isFragment?: boolean;
  fallback?: React.ReactElement;
}
//======================= CC stands for conditional component
export const CondComp: React.FC<CondCompT> = ({
  baseCond: baseCond,
  children,
  fallback = null,
  isFragment = false,
  ...props
}) => {
  return baseCond && !isFragment ? (
    <div data-testid="cc-container" {...props}>
      {children}{' '}
    </div>
  ) : baseCond && isFragment ? (
    <>{children} </>
  ) : (
    fallback
  );
};
//--------------------------------------
interface AsyncCondCompT extends React.ComponentPropsWithoutRef<'div'> {
  status?: 'idle' | 'loading' | 'success' | 'error';
  isSuccess: boolean;
  isLoading?: boolean;
  isIdle?: boolean;
  isError?: boolean;
  isFragment?: boolean;
  isResponseEmpty?: boolean;
  customEmptyResponseComp?: React.ReactElement;
  customFallbackComp?: React.ReactElement;
  customLoadingComp?: React.ReactElement;
  customIdleComp?: React.ReactElement;
}
//=======================
export const AsyncCondComp: React.FC<AsyncCondCompT> = ({
  status,
  isSuccess,
  children,
  isLoading = false,
  isIdle,
  isError,
  isFragment = false,
  isResponseEmpty,
  customEmptyResponseComp,
  customLoadingComp,
  customFallbackComp,
  customIdleComp,
  ...props
}) => {
  try {
    return (isSuccess || status === 'success') && isFragment ? (
      <>{children}</>
    ) : (isSuccess || status === 'success') && !isFragment ? (
      <div {...props}>{children} </div>
    ) : isLoading || status === 'loading' ? (
      <CondComp
        baseCond={React.isValidElement(customIdleComp)}
        fallback={
          <div
            data-testid="loading-indicator"
            className="flex justify-center w-full p-1"
          >
            <Spinner />
          </div>
        }
      >
        {customLoadingComp}
      </CondComp>
    ) : isIdle ? (
      <CondComp baseCond={React.isValidElement(customIdleComp)} fallback={null}>
        {customIdleComp}
      </CondComp>
    ) : isResponseEmpty ? (
      <CondComp
        baseCond={React.isValidElement(customEmptyResponseComp)}
        fallback={
          <div>
            <TiInfoOutline size="30" className="mx-auto text-orange-700" />
            <p className="text-center">Nothing found</p>
          </div>
        }
      >
        {customEmptyResponseComp}
      </CondComp>
    ) : isIdle || status === 'idle' ? (
      customIdleComp
    ) : isError || status === 'error' ? (
      <CondComp
        baseCond={React.isValidElement(customFallbackComp)}
        fallback={
          <div data-testid="fallback-error" role="alert" className="mx-auto">
            <TiInfoOutline size="30" className="text-orange-700" />
            <p className="text-center">Something went wrong!</p>
          </div>
        }
      >
        {customFallbackComp}
      </CondComp>
    ) : null;
  } catch (error) {
    return customFallbackComp ? (
      customFallbackComp
    ) : (
      <div data-testid="fallback-error" role="alert" className="mx-auto">
        <TiInfoOutline size="30" className="text-orange-700" />
        <p className="text-center">Something went wrong!</p>
      </div>
    );
  }
};
