'use client'

import { Button, Input, Label, SearchField } from 'react-aria-components'
import { IoClose, IoSearch } from 'react-icons/io5'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import './Search.scss'

export const Search: React.FC = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <SearchField
      className="search-field"
      defaultValue={searchParams.get('query') ?? ''}
      onChange={handleSearch}
      onClear={() => handleSearch('')}
      aria-label="Rechercher un article"
      autoFocus
    >
      <Label className="sr-only">Rechercher un article</Label>
      <div className="search-field__wrapper">
        <IoSearch
          className="search-field__icon"
          aria-hidden="true"
          focusable="false"
          size={20}
        />
        <Input
          className="search-field__input"
          placeholder="Rechercher..."
        />
        <Button className="search-field__clear">
          <IoClose
            aria-hidden="true"
            focusable="false"
            size={20}
          />
          <span className="sr-only">Effacer la recherche</span>
        </Button>
      </div>
    </SearchField>
  )
}
