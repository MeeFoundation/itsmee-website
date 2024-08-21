const notificationTypes = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "alert",
  "warning",
];
const notificationPositions = [
  "top-right",
  "top-left",
  "top-center",
  "bottom-right",
  "bottom-left",
  "bottom-center",
  "center",
  "center-right",
  "center-left",
];
const openNotification = (
  id: string,
  type?: string,
  position?: string,
) => {
  const notificationContainer = document.getElementById(id);
  if (type) {
    notificationTypes.forEach((notificationType) => {
      if (notificationContainer?.classList.contains(notificationType)) {
        notificationContainer?.classList.remove(notificationType);
      }
    });
    notificationContainer?.classList.add(type);
  }
  if (position) {
    notificationPositions.forEach((notificationPosition) => {
      if (notificationContainer?.classList.contains(notificationPosition)) {
        notificationContainer?.classList.remove(notificationPosition);
      }
    });
    notificationContainer?.classList.add(position);
  }
  if (notificationContainer?.classList.contains("hidden")) {
    notificationContainer.classList.toggle("hidden");
  } else {
    notificationContainer?.classList.add("hidden");
    setTimeout(() => {
      notificationContainer?.classList.remove("hidden");
    }, 100);
  }
};

export default { openNotification };
