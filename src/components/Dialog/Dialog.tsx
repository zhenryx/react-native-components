import React from 'react';
import { Pressable, View, StyleSheet, TextStyle } from 'react-native';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeConfig/ThemeConfig';
import { Popup } from '../Popup/Popup';
export interface DialogProps {
  visible: boolean
  type?: 'alert' | 'confirm'
  title?: string;
  content?: string;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
  closeOnOverlayPress?: boolean
  round?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode
}
export const Dialog: React.FC<DialogProps> = ({
  visible = false,
  type = "alert",
  title = "提示",
  content,
  titleStyle,
  contentStyle,
  closeOnOverlayPress = false,
  round = false,
  confirmText = "确认",
  cancelText = '取消',
  onConfirm = () => null,
  onCancel = () => null,
  children
}) => {
  const { theme } = useTheme()
  const confirmTextColor = theme['$primary-color'] || '#e25829ff'
  const paddingHorizontal = theme['$dialog-padding-horizontal'] || 20
  const paddingTop = theme['$dialog-padding-top'] || 24
  const contentMarginVertical = theme['$dialog-content-margin-vertical'] || 10
  const handleConfirm = () => {
    onConfirm()
  }
  const handleClose = () => {
    onCancel();
  };

  const renderDialog = () => (
    <View style={styles.dialog_content_wrapper}>
      <View style={[styles.dialog_text, { paddingHorizontal, paddingTop }]}>
        {title && <Text style={[styles.dialog_title, titleStyle]}>{title}</Text>}
        {content && <Text style={[styles.dialog_content, { marginVertical: contentMarginVertical }, contentStyle]}>{content}</Text>}
      </View>
      {children && <View style={styles.dialog_children}>{children}</View>}
      <View style={styles.dialog_footer_button}>
        {type === 'confirm' && <Pressable style={styles.dialog_footer_button_cancel} onPress={handleClose}><Text style={styles.dialog_footer_button_cancel_text}>{cancelText}</Text></Pressable>}
        <Pressable style={styles.dialog_footer_button_confirm} onPress={handleConfirm}><Text style={[styles.dialog_footer_button_confirm_text, { color: confirmTextColor }]}>{confirmText}</Text></Pressable>
      </View>
    </View>
  )
  return (
    <Popup
      visible={visible}
      closeable={false}
      closeOnOverlayPress={closeOnOverlayPress}
      onClose={handleClose}
      round={round}>
      {renderDialog()}
    </Popup>
  );
};
const styles = StyleSheet.create({
  dialog_content_wrapper: {
    width: '100%',
    minHeight: 100,
  },
  dialog_text: {
    width: '100%',
  },
  dialog_title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center'
  },
  dialog_content: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
  },
  dialog_children: {
    width: '100%',
  },
  dialog_footer_button: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#EEE',
    width: '100%',
  },
  dialog_footer_button_cancel: {
    flex: 1,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#F0F0F0',
  },
  dialog_footer_button_confirm: {
    flex: 1,
    minHeight: 50,
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
Dialog.displayName = 'Dialog'
