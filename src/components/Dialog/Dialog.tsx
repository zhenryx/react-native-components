import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeConfig/ThemeConfig';
import { Popup } from '../Popup/Popup';
export interface DialogProps {
  visible: boolean
  type?: 'alert' | 'confirm'
  title?: string;
  content?: string;
  closeOnOverlayPress?: boolean
  round?:boolean;
  onClose?:()=>void;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode
}
export const Dialog: React.FC<DialogProps> = ({
  visible = false,
  type = "alert",
  title = "提示",
  content = `设置后将不再显示\n可在APP内搜索“学生专区”进入活动页`,
  closeOnOverlayPress = false,
  round=false,
  onClose,
  onConfirm = () => null,
  onCancel = () => null,
  children
}) => {
  const { theme } = useTheme()
  const confirmTextColor = theme['$primary-color'] || '#07BDC7'
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      onCancel();
    }
  };
  
  const renderDialog = () => (
    <View style={styles.dialog_content_wrapper}>
      <View style={styles.dialog_text}>
        {title && <Text style={styles.dialog_title} ellipsizeMode='tail' numberOfLines={1}>{title}</Text>}
        <Text style={styles.dialog_content}>{content}</Text>
      </View>
      {children}
      <View style={styles.dialog_footer_button}>
        {type === 'confirm' && <Pressable style={styles.dialog_footer_button_cancel} onPress={onCancel}><Text style={styles.dialog_footer_button_cancel_text}>取消</Text></Pressable>}
        <Pressable style={styles.dialog_footer_button_confirm} onPress={onConfirm}><Text style={[styles.dialog_footer_button_confirm_text, { color: confirmTextColor }]}>确定</Text></Pressable>
      </View>
    </View>
  )
  return (
    <Popup visible={visible} closeable={false} height={200} closeOnOverlayPress={closeOnOverlayPress} onClose={handleClose} round={round}>
      {renderDialog()}
    </Popup>
  );
};
const styles = StyleSheet.create({
  dialog_content_wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  dialog_text: {
    paddingHorizontal: 10,
    width: '100%',
  },
  dialog_title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    color: '#222',
    textAlign: 'center'
  },
  dialog_content: {
    color: '#555',
    fontSize: 14,
    marginVertical: 15,
    textAlign: 'center',
    lineHeight: 20
  },
  dialog_footer_button: {
    height: 51,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#EEE',
    width: '100%',
  },
  dialog_footer_button_cancel: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#F0F0F0',
  },
  dialog_footer_button_confirm: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog_footer_button_cancel_text: {
    color: '#999',
    fontSize: 16,
  },
  dialog_footer_button_confirm_text: {
    fontSize: 16,
  }
});
Dialog.displayName='Dialog'
