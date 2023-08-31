import { redirect } from 'react-router-dom'

export const loader: () => Response | null = () => {
  const searchParams = new URLSearchParams(location.search)

  const popupId = searchParams.get('id')

  if (popupId) return redirect(`/popup/:${popupId}`)

  return null
}
