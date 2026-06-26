import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import { type ReactElement, type ReactNode } from 'react';
import { AppContext } from '@/contexts/AppContext';

type AppContextValue = NonNullable<React.ComponentProps<typeof AppContext.Provider>['value']>;

interface RenderWithProvidersOptions extends Omit<RenderOptions, 'wrapper'> {
  appContextValue?: Partial<AppContextValue>;
}

export function renderWithProviders(
  ui: ReactElement,
  options: RenderWithProvidersOptions = {}
): RenderResult {
  const { appContextValue, ...rest } = options;
  return render(
    <MockAppProvider value={appContextValue ?? {}}>{ui}</MockAppProvider>,
    rest
  );
}

function MockAppProvider({
  value,
  children,
}: {
  value: Partial<AppContextValue>;
  children: ReactNode;
}) {
  // The default is a stub object cast to AppContextValue. Tests should pass
  // only the methods/properties the component under test needs.
  const stub = value as AppContextValue;
  return <AppContext.Provider value={stub}>{children}</AppContext.Provider>;
}
