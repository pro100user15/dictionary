import React, { useEffect, useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Button, Typography } from '@mui/material';
import {
  CustomCheckBox,
  CustomEnumSelect,
  CustomFileTextField,
  CustomTextField
} from '../../ui/custom-fields/custom-outlined-text-field.component';
import $api from '../../requests';
import { toast } from 'react-toastify';
import ImageIcon from '@mui/icons-material/Image';

const ZoneForm = ({ zone = null, loadZones = (_) => _, setModalClose }) => {
  const [zones, setZones] = useState([]);

  const [image, setImage] = useState(null);

  const { control, handleSubmit, setValue } = useForm({
    mode: 'onBlur'
  });

  const { errors } = useFormState({ control });

  useEffect(() => {
    $api
      .get('/api/zones/types')
      .then((response) => setZones(response.data))
      .catch(() =>
        toast.warn(
          'Виникли проблеми під час получення доступних типів ігрових зон. Будь ласка спробуйте ще раз'
        )
      );
    if (zone) {
      setValue('name', zone.name);
      setValue('type', zone.type);
      setValue('price', zone.price);
      setValue('discount', zone.discount);
      setValue('separateRoom', zone.separateRoom);
    }
  }, [zone]);

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const updateImage = (zoneId) => {
    if (image != null) {
      const formData = new FormData();
      formData.append('imageFile', image, image.name);
      $api
        .post(`/api/zones/${zoneId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(() => loadZones())
        .catch(() =>
          toast.warn(
            'Виникли проблеми під час збереження зображення ігрової зони. Будь ласка спробуйте ще раз'
          )
        );
    } else {
      loadZones();
    }
  };

  const onSubmit = async (request) => {
    if (zone) {
      request = { id: zone.id, ...request };
    }

    if (zone) {
      $api
        .put('/api/zones', request)
        .then((response) => {
          toast.success('Ігрова зона успішно змінена');
          updateImage(response.data.id);
        })
        .catch(() =>
          toast.warn(
            'Виникли проблеми під час обновлення ігрової зони. Будь ласка спробуйте ще раз'
          )
        );
    } else {
      $api
        .post('/api/zones', request)
        .then((response) => {
          toast.success('Ігрова зона успішно додана');
          updateImage(response.data.id);
        })
        .catch(() =>
          toast.warn(
            'Виникли проблеми під час збереження ігрової зони. Будь ласка спробуйте ще раз'
          )
        );
    }
    setModalClose();
  };

  const onDeleteZone = () => {
    $api
      .delete(`/api/zones/${zone.id}`)
      .then(() => {
        toast.success('Ігрова зона успішно видалина');
        loadZones();
      })
      .catch(() =>
        toast.warn(
          'Виникли проблеми під час видалення ігрової зони. Можливо для неї привʼязані якісь компютери. Будь ласка спробуйте ще раз'
        )
      );
    setModalClose();
  };

  return (
    <div>
      <Typography variant="h5" component="div" className={'mb-1'}>
        {zone ? 'Редагувати зону' : 'Додати нову зону'}
      </Typography>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <CustomTextField
          control={control}
          name={'name'}
          rules={{ required: 'Назва не може бути пустою' }}
          label={'Назва'}
          error={errors.name}
        />
        <CustomFileTextField
          label={zone ? 'Нове зображення' : 'Зображення'}
          value={image}
          onChange={onChangeImage}
          inputProps={{
            startAdornment: <ImageIcon />
          }}
        />
        <CustomEnumSelect
          control={control}
          name={'type'}
          rules={{ required: 'Тип не може бути пустим' }}
          label={'Тип'}
          values={zones}
          error={errors.type}
        />
        <CustomTextField
          control={control}
          name={'price'}
          rules={{ required: 'Ціна не може бути пустою' }}
          label={'Ціна'}
          type={'number'}
          error={errors.price}
        />
        <CustomTextField
          control={control}
          name={'discount'}
          rules={{ required: 'Знижка не може бути пустою' }}
          label={'Знижка'}
          type={'number'}
          error={errors.discount}
        />
        <CustomCheckBox
          control={control}
          name={'separateRoom'}
          label={'Окрема кімната'}
          setValue={setValue}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          className={'mt-1'}>
          {zone ? 'Відредагувати' : 'Додати'}
        </Button>
        {zone && (
          <Button
            variant="contained"
            color="secondary"
            fullWidth={true}
            disableElevation={true}
            sx={{ mt: 1 }}
            onClick={onDeleteZone}>
            Видалити
          </Button>
        )}
      </form>
    </div>
  );
};

export default ZoneForm;
