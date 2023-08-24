import { redirect } from 'react-router-dom'

export const loader: () => Response | null = () => {
  const searchParams = new URLSearchParams(location.search)

  const isPopup = searchParams.get('isPopup') === 'true'

  if (isPopup) {
    const id = searchParams.get('id')

    return redirect(`/popup/:${id}`)
  }

  return null
}
