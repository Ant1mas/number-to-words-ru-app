import React from "react";
import {
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./InputNumberField.module.sass"
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'

const InputNumberField = () => {
  const { number, saveNumber } = React.useContext(ModuleParamsContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <TextField
        id="input-number"
        label={t('module_number_input_label')}
        margin="normal"
        variant="outlined"
        fullWidth
        value={number}
        placeholder="12345.6789"
        helperText={t('module_number_input_helper_text')}
        onChange={saveNumber}
      />
    </>
  )
}

export default InputNumberField;
