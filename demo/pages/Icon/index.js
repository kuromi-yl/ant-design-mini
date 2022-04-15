Page({
  data: {
    iconTypes: [
      'MinusOutline',
      'AlipayCircleFill',
      'CheckCircleFill',
      'FireFill',
      'FaceRecognitionOutline',
      'StarFill',
      'EyeInvisibleFill',
      'SmileFill',
      'FrownFill',
      'BankcardOutline',
      'HeartOutline',
      'EyeFill',
      'HeartFill',
      'DownFill',
      'CloseCircleFill',
      'VideoOutline',
      'CouponOutline',
      'ReceiptOutline',
      'AntOutline',
      'UserCircleOutline',
      'PayCircleOutline',
      'BillOutline',
      'PlayOutline',
      'PayOutline',
      'MoreOutline',
      'ShrinkOutline',
      'ArrowsAltOutline',
      'StarOutline',
      'CheckOutline',
      'DeleteOutline',
      'LinkOutline',
      'InformationCircleOutline',
      'GlobalOutline',
      'InformationCircleFill',
      'ExclamationCircleFill',
      'CheckCircleOutline',
      'CloseCircleOutline',
      'SetOutline',
      'QuestionCircleFill',
      'QuestionCircleOutline',
      'UpCircleOutline',
      'FrownOutline',
      'DownCircleOutline',
      'ExclamationCircleOutline',
      'MinusCircleOutline',
      'RedoOutline',
      'UndoOutline',
      'EyeInvisibleOutline',
      'ForbidFill',
      'PicturesOutline',
      'PictureOutline',
      'PictureWrongOutline',
      'EyeOutline',
      'AddCircleOutline',
      'ClockCircleFill',
      'ClockCircleOutline',
      'BellMuteOutline',
      'KeyOutline',
      'BellOutline',
      'SearchOutline',
      'CollectMoneyOutline',
      'UnorderedListOutline',
      'AppstoreOutline',
      'ExclamationTriangleOutline',
      'AddOutline',
      'ScanningOutline',
      'ScanCodeOutline',
      'ExclamationOutline',
      'CloseOutline',
      'ScanningFaceOutline',
      'LeftOutline',
      'DownOutline',
      'UpOutline',
      'RightOutline',
      'KoubeiOutline',
      'KoubeiFill',
      'AAOutline',
      'ArrowDownCircleOutline',
      'MovieOutline',
      'CompassOutline',
      'LoopOutline',
      'TextOutline',
      'TagOutline',
      'FlagOutline',
      'EnvironmentOutline',
      'CalendarOutline',
      'LocationFill',
      'PhoneFill',
      'PhonebookOutline',
      'SmileOutline',
      'UserAddOutline',
      'FileWrongOutline',
      'SoundMuteFill',
      'SoundMuteOutline',
      'LockOutline',
      'UnlockOutline',
      'EditSOutline',
      'UploadOutline',
      'SoundOutline',
      'DownlandOutline',
      'SendOutline',
      'FillinOutline',
      'AudioMutedOutline',
      'AudioOutline',
      'UserOutline',
      'UserContactOutline',
      'TeamOutline',
      'UserSetOutline',
      'FileOutline',
      'MailOutline',
      'TruckOutline',
      'MailOpenOutline',
      'ChatCheckOutline',
      'ChatAddOutline',
      'ChatWrongOutline',
      'PhonebookFill',
      'AddressBookFill',
      'CalculatorOutline',
      'PieOutline',
      'HandPayCircleOutline',
      'GiftOutline',
      'TransportQRcodeOutline',
      'FolderOutline',
      'AlipaySquareFill',
      'TravelOutline',
      'AppOutline',
      'HistogramOutline',
      'MailFill',
      'CameraOutline',
      'EditFill',
      'SystemQRcodeOutline',
      'LockFill',
      'AudioFill',
      'TeamFill',
      'FilterOutline',
      'EditSFill',
      'LikeOutline',
      'TextDeletionOutline',
      'StopOutline',
      'FingerdownOutline',
      'MessageFill',
      'LocationOutline',
      'ContentOutline',
      'ExclamationShieldFill',
      'ReceivePaymentOutline',
      'ExclamationShieldOutline',
      'AddSquareOutline',
      'CloseShieldOutline',
      'CheckShieldOutline',
      'CheckShieldFill',
      'ShopbagOutline',
      'MessageOutline',
    ],
    searchValue: '',
  },
  handleSearchChange(value) {
    this.setData({ searchValue: value });
  },
  handleClickIcon(e) {
    const { info } = e.target.dataset;

    top.postMessage({ iconType: info }, '*');

    my.showToast({
      content: `${info} 已复制到剪贴板`,
    });
  },
});
