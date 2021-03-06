USE [Neptune]
GO
/****** Object:  Table [dbo].[beverage]    Script Date: 18/02/2021 11:38:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[beverage](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[type] [int] NOT NULL,
	[description] [varchar](50) NOT NULL,
	[dateadded] [datetime] NOT NULL,
	[imagefilename] [varchar](500) NULL,
 CONSTRAINT [PK_beverage] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[beverage]  WITH CHECK ADD  CONSTRAINT [FK_beverage_beveragetype] FOREIGN KEY([type])
REFERENCES [dbo].[beverage_type] ([id])
GO
ALTER TABLE [dbo].[beverage] CHECK CONSTRAINT [FK_beverage_beveragetype]
GO
