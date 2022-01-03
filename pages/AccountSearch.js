import '@reach/combobox/styles.css';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { matchSorter } from 'match-sorter';
import * as React from 'react';
import { useThrottle } from 'react-use';

import { accounts } from './accounts';

export default function Example() {
  const [term, setTerm] = React.useState('');
  const results = useCityMatch(term);
  const handleChange = (event) => setTerm(event.target.value);

  return (
    <Combobox className="combobox-wrapper" aria-label="Accounts">
      <ComboboxInput
        placeholder="Account Search"
        className="combobox-input"
        onChange={handleChange}
      />
      {results && (
        <ComboboxPopover className="shadow-popup">
          {results.length > 0 ? (
            <ComboboxList>
              {results.slice(0, 10).map((result, index) => (
                <ComboboxOption
                  key={index}
                  value={`${result.code} (${result.AccountName})`}
                />
              ))}
            </ComboboxList>
          ) : (
            <span style={{ display: 'block', margin: 8 }}>
              No results found
            </span>
          )}
        </ComboboxPopover>
      )}
    </Combobox>
  );
}

function useCityMatch(term) {
  const throttledTerm = useThrottle(term, 100);
  return React.useMemo(
    () =>
      term.trim() === ''
        ? null
        : matchSorter(accounts, term, {
            keys: [(item) => `${item.code} (${item.AccountName})`],
          }),
    [throttledTerm]
  );
}
