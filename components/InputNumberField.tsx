import { useAppSelector, useAppDispatch } from 'lib/config/redux/store'
import {
  moduleNumberUpdated,
  selectModuleNumber,
} from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useI18n from 'lib/hooks/useI18n'

export default function InputNumberField() {
  const dispatch = useAppDispatch()
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { t } = useI18n()

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{t('module_number_input_label')}</span>
      </label>
      <input
        id="input-number"
        type="text"
        className="input-bordered input w-full"
        placeholder="12345.6789"
        value={moduleNumber}
        onChange={(event) => {
          dispatch(moduleNumberUpdated(event.target.value))
        }}
      />
      <label className="label">
        <span className="label-text-alt">
          {t('module_number_input_helper_text')}
        </span>
      </label>
    </div>
  )
}
